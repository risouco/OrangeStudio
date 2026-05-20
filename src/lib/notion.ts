import { Client } from "@notionhq/client";
import type { Plan, News, FAQ, Work } from "@/types/cms";

const PLANS_DS = "c855d9fc-886c-411f-9bba-8efab40349bf";
const NEWS_DS = "7057519a-bc2a-4ffb-b02d-cf6eadaaa2bf";
const FAQS_DS = "d8dbc408-473f-40ef-930f-c7b0b752ec2c";
const WORKS_DS = "aa1ce82d-87c7-4343-bf56-04de54bca0ea";

function getClient(): Client | null {
  const auth = process.env.NOTION_API_KEY;
  if (!auth) return null;
  try {
    return new Client({ auth });
  } catch {
    return null;
  }
}

// Helper extractors -------------------------------------------------
type AnyProp = Record<string, unknown> & { type?: string };

function url(prop: unknown): string {
  const p = prop as AnyProp | undefined;
  if (!p) return "";
  const v = p.url;
  return typeof v === "string" ? v : "";
}

function rt(prop: unknown): string {
  const p = prop as AnyProp | undefined;
  if (!p) return "";
  const arr = (p.rich_text ?? p.title) as Array<{ plain_text?: string }> | undefined;
  if (!Array.isArray(arr)) return "";
  return arr.map((t) => t.plain_text ?? "").join("").trim();
}

function num(prop: unknown): number | null {
  const p = prop as AnyProp | undefined;
  if (!p) return null;
  const v = p.number;
  return typeof v === "number" ? v : null;
}

function sel(prop: unknown): string | null {
  const p = prop as AnyProp | undefined;
  if (!p) return null;
  const v = p.select as { name?: string } | null | undefined;
  return v?.name ?? null;
}

function msel(prop: unknown): string[] {
  const p = prop as AnyProp | undefined;
  if (!p) return [];
  const v = p.multi_select as Array<{ name?: string }> | undefined;
  if (!Array.isArray(v)) return [];
  return v.map((x) => x.name ?? "").filter(Boolean);
}

function chk(prop: unknown): boolean {
  const p = prop as AnyProp | undefined;
  if (!p) return false;
  return !!p.checkbox;
}

function dt(prop: unknown): string | null {
  const p = prop as AnyProp | undefined;
  if (!p) return null;
  const v = p.date as { start?: string } | null | undefined;
  return v?.start ?? null;
}

// Generic safe query ------------------------------------------------
async function queryAll(dataSourceId: string): Promise<Array<{ id: string; properties: Record<string, unknown> }>> {
  const client = getClient();
  if (!client) return [];
  try {
    const res = await client.dataSources.query({ data_source_id: dataSourceId, page_size: 100 });
    const results = (res as { results?: Array<{ id: string; properties: Record<string, unknown> }> }).results ?? [];
    return results;
  } catch (e) {
    console.warn("[notion] query failed", dataSourceId, e instanceof Error ? e.message : e);
    return [];
  }
}

// Public functions --------------------------------------------------
export async function getPlans(): Promise<Plan[]> {
  const rows = await queryAll(PLANS_DS);
  const plans: Plan[] = rows
    .filter((r) => chk(r.properties.Published))
    .map((r) => ({
      id: r.id,
      name: rt(r.properties.Name),
      price: num(r.properties.Price),
      priceUnit: sel(r.properties.PriceUnit),
      description: rt(r.properties.Description),
      target: rt(r.properties.Target),
      order: num(r.properties.Order) ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
  return plans;
}

export async function getNews(): Promise<News[]> {
  const rows = await queryAll(NEWS_DS);
  return rows
    .filter((r) => chk(r.properties.Published))
    .map((r) => ({
      id: r.id,
      title: rt(r.properties.Title),
      date: dt(r.properties.Date),
      body: rt(r.properties.Body),
    }))
    .sort((a, b) => {
      const da = a.date ?? "";
      const db = b.date ?? "";
      return db.localeCompare(da);
    })
    .slice(0, 5);
}

export async function getWorks(): Promise<Work[]> {
  const rows = await queryAll(WORKS_DS);
  return rows
    .filter((r) => chk(r.properties.Published))
    .map((r) => ({
      id: r.id,
      title: rt(r.properties.Title),
      videoUrl: url(r.properties.VideoURL),
      type: sel(r.properties.Type),
      genres: msel(r.properties.Genre),
      effects: msel(r.properties.Effect),
      order: num(r.properties.Order) ?? 0,
      featured: chk(r.properties.Featured),
    }))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.order - b.order;
    });
}

export async function getFaqs(): Promise<FAQ[]> {
  const rows = await queryAll(FAQS_DS);
  return rows
    .filter((r) => chk(r.properties.Published))
    .map((r) => ({
      id: r.id,
      question: rt(r.properties.Question),
      answer: rt(r.properties.Answer),
      category: sel(r.properties.Category),
      order: num(r.properties.Order) ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
}
