"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 py-6">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900">
              VitalAI API Docs
            </h1>
            <p className="text-sm text-zinc-600">
              Swagger UI for all backend endpoints
            </p>
          </div>
          <a
            href="/api/openapi"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Open Raw OpenAPI JSON
          </a>
        </div>

        <div className="swagger-wrap overflow-hidden rounded-xl border border-zinc-200">
          <SwaggerUI
            url="/api/openapi"
            docExpansion="list"
            defaultModelsExpandDepth={1}
            persistAuthorization
          />
        </div>
      </div>

      <style jsx global>{`
        .swagger-wrap .swagger-ui {
          background: #ffffff;
        }
        .swagger-wrap .swagger-ui .topbar {
          display: none;
        }
        .swagger-wrap .swagger-ui .opblock-tag {
          color: #111827;
        }
      `}</style>
    </div>
  );
}
