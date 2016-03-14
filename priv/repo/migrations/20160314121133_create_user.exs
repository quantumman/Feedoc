defmodule Feedoc.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :avatar, :string
      add :post_id, references(:posts)

      timestamps
    end

  end
end
