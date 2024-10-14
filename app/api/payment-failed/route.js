import { redirect } from "next/navigation";

export async function GET(request) {
  redirect("/payment-failed");
}

export async function POST(request) {
  redirect("/payment-failed");
}