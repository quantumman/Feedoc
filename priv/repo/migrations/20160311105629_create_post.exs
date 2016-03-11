defmodule Feedoc.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string
      add :content, :string
      add :group_id, references(:groups, on_delete: :nothing)

      timestamps
    end
    create index(:posts, [:group_id])

  end
end
