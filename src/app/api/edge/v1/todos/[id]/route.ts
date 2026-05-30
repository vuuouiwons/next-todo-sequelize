import { NextRequest, NextResponse } from 'next/server';
import { Todo } from '@/servers/db';

// PUT: Update a Todo (Toggle completion)
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { completed } = await request.json();
    const { id } = await params;
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    todo.completed = completed;
    await todo.save();

    return NextResponse.json(todo);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE: Remove a Todo
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    await todo.destroy();
    return NextResponse.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete todo' }, { status: 500 });
  }
}