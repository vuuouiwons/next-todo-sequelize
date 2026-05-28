import { NextRequest, NextResponse } from 'next/server';
import { Todo } from '@/servers/db';

// GET: Fetch all Todos
export async function GET() {
  try {
    const todos = await Todo.findAll({ order: [['createdAt', 'DESC']] });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

// POST: Create a new Todo
export async function POST(request: NextRequest) {
  try {
    console.log(await request);
    const body = await request.json();
    if (!body.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const todo = await Todo.create({ title: body.title });
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create todo' }, { status: 500 });
  }
}