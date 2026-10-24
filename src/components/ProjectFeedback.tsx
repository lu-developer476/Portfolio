"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { projectRecommendations } from "@/config/project-feedback-examples";

type FeedbackComment = { id: string; name: string; rating: number; message: string; createdAt: number };
type FeedbackSummary = { recommendationCount: number; ratingAverage: number | null; ratingsCount: number; comments: FeedbackComment[] };
type FeedbackMode = "recommendations" | "comments" | null;

type ProjectFeedbackProps = { projectSlug: string; projectTitle: string; language: "es" | "en" };

const emptySummary: FeedbackSummary = { recommendationCount: 0, ratingAverage: null, ratingsCount: 0, comments: [] };

function getVisitorId() {
  const key = "portfolio-feedback-visitor-id";
  let id = window.localStorage.getItem(key);
  if (!id) {
    id = window.crypto.randomUUID();
    window.localStorage.setItem(key, id);
  }
  return id;
}

function shuffleComments(comments: FeedbackComment[]) {
  const shuffled = [...comments];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export default function ProjectFeedback({ projectSlug, projectTitle, language }: ProjectFeedbackProps) {
  const isSpanish = language === "es";
  const labels = isSpanish
    ? { recommendations: "Recomendaciones", comments: "Comentarios", recommendTitle: "Recomendá este proyecto", recommendText: "Si este proyecto te resultó útil o interesante, podés recomendarlo.", alreadyRecommended: "Ya recomendaste este proyecto desde este navegador.", recommendAction: "Recomendar proyecto", recommendationCount: "recomendaciones", rating: "Valoración", noRatings: "Todavía no hay valoraciones publicadas.", reviews: "Opiniones publicadas por visitantes", noComments: "Todavía no hay opiniones enviadas por visitantes. Podés dejar la primera.", name: "Nombre o alias", namePlaceholder: "Cómo querés aparecer", comment: "Tu comentario", commentPlaceholder: "¿Qué te pareció este proyecto? Contá algo concreto…", send: "Enviar comentario", sending: "Enviando…", pending: "Gracias. Tu comentario quedó pendiente de revisión antes de publicarse.", loadError: "No se pudo cargar el feedback en este momento.", submitError: "No se pudo enviar el comentario. Probá nuevamente.", close: "Cerrar", stars: "estrellas", commentMin: "Mínimo 8 caracteres.", noProject: "Los comentarios para proyectos en preparación estarán disponibles cuando se publiquen.", editorialRecommendationsTitle: "Recomendaciones para este proyecto" }
    : { recommendations: "Recommendations", comments: "Comments", recommendTitle: "Recommend this project", recommendText: "If you found this project useful or interesting, you can recommend it.", alreadyRecommended: "You have already recommended this project from this browser.", recommendAction: "Recommend project", recommendationCount: "recommendations", rating: "Rating", noRatings: "There are no published ratings yet.", reviews: "Published visitor reviews", noComments: "No visitor reviews yet. You can leave the first one.", name: "Name or alias", namePlaceholder: "How you want to appear", comment: "Your comment", commentPlaceholder: "What did you think of this project? Be specific…", send: "Submit comment", sending: "Sending…", pending: "Thanks. Your comment is pending review before it can be published.", loadError: "Feedback could not be loaded right now.", submitError: "The comment could not be submitted. Please try again.", close: "Close", stars: "stars", commentMin: "At least 8 characters.", noProject: "Feedback for upcoming projects will be available when they are published.", editorialRecommendationsTitle: "Recommendations for this project" };

  const [mode, setMode] = useState<FeedbackMode>(null);
  const [summary, setSummary] = useState<FeedbackSummary>(emptySummary);
  const [visitorId, setVisitorId] = useState("");
  const [recommended, setRecommended] = useState(false);
  const [loading, setLoading] = useState(true);
  const [savingRecommendation, setSavingRecommendation] = useState(false);
  const [savingComment, setSavingComment] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [website, setWebsite] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const recommendationStorageKey = `portfolio-recommended:${projectSlug}`;
  const projectRecommendationsForProject = projectRecommendations[projectSlug];
  const editorialReviews = projectRecommendationsForProject?.reviews[language] ?? [];
  const displayedRecommendationCount = Math.max(summary.recommendationCount, projectRecommendationsForProject?.recommendations[language].length ?? 0);
  const displayedReviewCount = editorialReviews.length + summary.ratingsCount;
  const displayedRatingAverage = displayedReviewCount
    ? Math.round(((editorialReviews.reduce((sum, review) => sum + review.rating, 0) + summary.comments.reduce((sum, comment) => sum + comment.rating, 0)) / displayedReviewCount) * 10) / 10
    : null;

  const refreshSummary = useCallback(async () => {
    try {
      const response = await fetch(`/api/project-feedback?project=${encodeURIComponent(projectSlug)}`, { cache: "no-store" });
      if (!response.ok) throw new Error("feedback-load-failed");
      const data = await response.json() as FeedbackSummary;
      setSummary({
        recommendationCount: Number(data.recommendationCount ?? 0),
        ratingAverage: typeof data.ratingAverage === "number" ? data.ratingAverage : null,
        ratingsCount: Number(data.ratingsCount ?? 0),
        comments: shuffleComments(Array.isArray(data.comments) ? data.comments : [])
      });
      setError("");
    } catch {
      setError(labels.loadError);
    } finally {
      setLoading(false);
    }
  }, [projectSlug, labels.loadError]);

  useEffect(() => {
    try {
      setVisitorId(getVisitorId());
      setRecommended(window.localStorage.getItem(recommendationStorageKey) === "true");
    } catch {
      setVisitorId("");
    }
    void refreshSummary();
  }, [recommendationStorageKey, refreshSummary]);

  const openModal = (nextMode: Exclude<FeedbackMode, null>) => {
    setNotice("");
    setError("");
    setMode(nextMode);
  };

  const submitRecommendation = async () => {
    if (projectSlug === "coming-soon" || recommended || savingRecommendation) return;
    if (!visitorId) { setError(labels.submitError); return; }
    setSavingRecommendation(true);
    setError("");
    try {
      const response = await fetch("/api/project-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "recommend", projectSlug, visitorId })
      });
      const data = await response.json();
      if (response.status === 409) {
        window.localStorage.setItem(recommendationStorageKey, "true");
        setRecommended(true);
      } else if (!response.ok) {
        throw new Error(data.error ?? "recommendation-failed");
      } else {
        window.localStorage.setItem(recommendationStorageKey, "true");
        setRecommended(true);
        setNotice(isSpanish ? "¡Gracias por recomendar este proyecto!" : "Thanks for recommending this project!");
      }
      await refreshSummary();
    } catch {
      setError(labels.submitError);
    } finally {
      setSavingRecommendation(false);
    }
  };

  const submitComment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (savingComment || projectSlug === "coming-soon") return;
    setSavingComment(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/project-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "comment", projectSlug, name, rating, message, website })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "comment-failed");
      setNotice(labels.pending);
      setName("");
      setMessage("");
      setRating(0);
    } catch {
      setError(labels.submitError);
    } finally {
      setSavingComment(false);
    }
  };

  return (
    <>
      <div className="project-feedback-actions mt-3 grid grid-cols-2 gap-2" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => openModal("recommendations")} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyber-gold/50 bg-black/50 px-3 py-2 text-xs font-semibold text-cyber-gold transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen sm:text-sm" aria-label={`${labels.recommendations}: ${projectTitle}`}>
          <span aria-hidden="true">👍</span><span>{labels.recommendations}</span>
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-white/65">{loading ? "…" : displayedRecommendationCount}</span>
        </button>
        <button type="button" onClick={() => openModal("comments")} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/50 px-3 py-2 text-xs font-semibold text-white/85 transition hover:border-cyber-neonGreen/70 hover:text-cyber-neonGreen sm:text-sm" aria-label={`${labels.comments}: ${projectTitle}`}>
          <span aria-hidden="true">💬</span><span>{labels.comments}</span>
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-white/65">{loading ? "…" : displayedReviewCount}</span>
        </button>
      </div>

      {mode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm" role="presentation" onClick={(event) => { event.stopPropagation(); setMode(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby={`feedback-title-${projectSlug}`} className="my-auto max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-cyber-gold/50 bg-[#09090d] p-5 shadow-[0_0_38px_rgba(250,204,21,0.14)] sm:p-6" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyber-neonGreen">{projectTitle}</p>
                <h3 id={`feedback-title-${projectSlug}`} className="mt-2 text-xl font-bold text-cyber-gold">{mode === "recommendations" ? labels.recommendations : labels.comments}</h3>
              </div>
              <button type="button" onClick={() => setMode(null)} className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white/70 hover:border-cyber-neonGreen hover:text-cyber-neonGreen" aria-label={labels.close}>✕</button>
            </div>

            {mode === "recommendations" ? (
              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm leading-relaxed text-white/75">{labels.recommendText}</p>
                  <p className="mt-3 text-2xl font-bold text-cyber-gold">{loading ? "…" : displayedRecommendationCount} <span className="text-sm font-medium text-white/60">{labels.recommendationCount}</span></p>
                </div>
                {projectSlug === "coming-soon" ? <p className="text-sm text-white/55">{labels.noProject}</p> : (
                  <button type="button" onClick={() => void submitRecommendation()} disabled={recommended || savingRecommendation} className="w-full rounded-xl border border-cyber-neonGreen/60 bg-cyber-neonGreen/10 px-4 py-3 text-sm font-semibold text-cyber-neonGreen transition hover:bg-cyber-neonGreen/15 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/45">
                    {recommended ? labels.alreadyRecommended : savingRecommendation ? labels.sending : labels.recommendAction}
                  </button>
                )}
                {projectRecommendationsForProject && (
                  <section className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <h4 className="font-semibold text-white/90">{labels.editorialRecommendationsTitle}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/75">
                      {projectRecommendationsForProject.recommendations[language].map((recommendation, index) => (
                        <li key={`${projectSlug}-recommendation-${index}`} className="flex items-start gap-2">
                          <span className="mt-px text-cyber-neonGreen" aria-hidden="true">✓</span><span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            ) : (
              <div className="mt-5 space-y-5">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-white/65">{labels.rating}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl font-bold text-cyber-gold">{displayedRatingAverage === null ? "—" : displayedRatingAverage.toFixed(1)}</span>
                    <span className="text-amber-300" aria-label={displayedRatingAverage === null ? labels.noRatings : `${displayedRatingAverage} / 5`}>{"★".repeat(Math.round(displayedRatingAverage ?? 0))}{"☆".repeat(5 - Math.round(displayedRatingAverage ?? 0))}</span>
                    <span className="text-xs text-white/45">({displayedReviewCount})</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white/90">{isSpanish ? "Valoraciones editoriales" : "Editorial ratings"}</h4>
                  <div className="mt-3 space-y-3">
                    {editorialReviews.map((review, index) => (
                      <article key={projectSlug + "-editorial-review-" + index} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-cyber-gold">{review.name}</p>
                          <span className="text-sm text-amber-300" aria-label={review.rating + " / 5}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                        </div>
                        <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed text-white/75">{review.message}</p>
                      </article>
                    ))}
                  </div>
                  <h4 className="mt-5 font-semibold text-white/90">{labels.reviews}</h4>
                  {loading ? <p className="mt-2 text-sm text-white/55">…</p> : summary.comments.length === 0 ? <p className="mt-2 text-sm text-white/55">{labels.noComments}</p> : (
                    <div className="mt-3 space-y-3">
                      {summary.comments.map((comment) => (
                        <article key={comment.id} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-cyber-gold">{comment.name}</p>
                            <span className="text-sm text-amber-300" aria-label={`${comment.rating} / 5`}>{"★".repeat(comment.rating)}{"☆".repeat(5 - comment.rating)}</span>
                          </div>
                          <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-relaxed text-white/75">{comment.message}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </div>

                

                {projectSlug === "coming-soon" ? <p className="text-sm text-white/55">{labels.noProject}</p> : (
                  <form onSubmit={submitComment} className="space-y-4 border-t border-white/10 pt-4">
                    <h4 className="font-semibold text-white/90">{isSpanish ? "Dejá tu opinión" : "Leave a review"}</h4>
                    <div>
                      <label htmlFor={`feedback-name-${projectSlug}`} className="mb-1.5 block text-sm text-white/75">{labels.name}</label>
                      <input id={`feedback-name-${projectSlug}`} value={name} onChange={(event) => setName(event.target.value)} required minLength={2} maxLength={60} placeholder={labels.namePlaceholder} className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyber-neonGreen" />
                    </div>
                    <fieldset>
                      <legend className="mb-2 text-sm text-white/75">{labels.rating}</legend>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" onClick={() => setRating(star)} aria-label={`${star} ${labels.stars}`} aria-pressed={rating === star} className={`rounded-md p-1 text-2xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-neonGreen ${rating >= star ? "text-amber-300" : "text-white/25 hover:text-amber-200"}`}>★</button>
                        ))}
                      </div>
                    </fieldset>
                    <div>
                      <label htmlFor={`feedback-message-${projectSlug}`} className="mb-1.5 block text-sm text-white/75">{labels.comment}</label>
                      <textarea id={`feedback-message-${projectSlug}`} value={message} onChange={(event) => setMessage(event.target.value)} required minLength={8} maxLength={800} rows={4} placeholder={labels.commentPlaceholder} className="w-full resize-y rounded-lg border border-white/15 bg-black/50 px-3 py-2.5 text-sm leading-relaxed text-white outline-none transition placeholder:text-white/30 focus:border-cyber-neonGreen" />
                      <p className="mt-1 text-right text-[11px] text-white/40">{message.length}/800 · {labels.commentMin}</p>
                    </div>
                    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                      <label htmlFor={`feedback-website-${projectSlug}`}>Website</label>
                      <input id={`feedback-website-${projectSlug}`} name="website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
                    </div>
                    <button type="submit" disabled={savingComment || rating < 1} className="w-full rounded-xl border border-cyber-gold/60 px-4 py-3 text-sm font-semibold text-cyber-gold transition hover:border-cyber-neonGreen hover:text-cyber-neonGreen disabled:cursor-not-allowed disabled:border-white/10 disabled:text-white/35">
                      {savingComment ? labels.sending : labels.send}
                    </button>
                  </form>
                )}
              </div>
            )}

            {notice && <p role="status" className="mt-4 rounded-lg border border-cyber-neonGreen/30 bg-cyber-neonGreen/5 p-3 text-sm leading-relaxed text-cyber-neonGreen">{notice}</p>}
            {error && <p role="alert" className="mt-4 rounded-lg border border-red-400/30 bg-red-500/5 p-3 text-sm leading-relaxed text-red-200">{error}</p>}
          </section>
        </div>
      )}
    </>
  );
}
