import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Purge cached data tagged with "content" (expire: 0 forces immediate invalidation)
    revalidateTag("content", { expire: 0 });

    // Purge Full Route Cache (HTML + RSC payload)
    revalidatePath("/");
    revalidatePath("/stack");
    revalidatePath("/bookmarks");

    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
