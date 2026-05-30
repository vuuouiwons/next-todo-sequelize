import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        console.log(await request);
        const body = await request.json();

        console.log(body);
        return NextResponse.json({}, { status: 201 })
    } catch {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}