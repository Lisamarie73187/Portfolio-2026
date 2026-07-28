-- Projects table for portfolio-2026.
-- The richer, variable-length parts of a project (tags, tech stack, features,
-- gallery) are stored as JSONB so the shape matches the `Project` TypeScript
-- type 1:1 and stays easy to edit. `sort_order` preserves the manual ordering
-- that drives the gallery and prev/next navigation.

create table if not exists projects (
  slug        text primary key,
  title       text not null,
  tagline     text not null,
  description text not null,
  year         integer not null,
  role         text not null,
  project_type text,
  tags         jsonb not null default '[]'::jsonb,
  cover_image text not null,
  home_image  text,
  gallery     jsonb not null default '[]'::jsonb,
  tech_stack  jsonb not null default '[]'::jsonb,
  features    jsonb not null default '[]'::jsonb,
  live_url          text,
  github_web_url    text,
  github_mobile_url text,
  sort_order        integer not null default 0
);

create index if not exists projects_sort_order_idx on projects (sort_order);
