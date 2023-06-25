interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypeColumn;
    todos: Todo[];
}

interface Todo extends Models.document {
    $id: string;
    $createdAt: string;
    title: string;
    status: string;
    image: string;
}

interface Image {
    buketId: string;
    fileId: string;
}