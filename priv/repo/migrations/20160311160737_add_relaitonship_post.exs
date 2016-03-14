defmodule Feedoc.Repo.Migrations.AddRelaitonshipPost do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :team_id, references(:teams)
    end
  end
end
