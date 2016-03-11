defmodule Feedoc.Repo.Migrations.CreateGroup do
  use Ecto.Migration

  def change do
    create table(:groups) do
      add :name, :string
      add :team_id, references(:teams, on_delete: :nothing)

      timestamps
    end
    create index(:groups, [:team_id])

  end
end
