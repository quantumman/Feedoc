defmodule Feedoc.Post do
  use Feedoc.Web, :model

  schema "posts" do
    field :title, :string
    field :content, :string
    belongs_to :group, Feedoc.Group
    belongs_to :team, Feedoc.Team

    timestamps
  end

  @required_fields ~w(title content group_id team_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> foreign_key_constraint(:group_id)
    |> foreign_key_constraint(:team_id)
  end

  def belongs_to(%{"team_id" => team_id, "group_id" => group_id}) do
    from p in Feedoc.Post,
    where: p.team_id == ^team_id and p.group_id == ^group_id,
    select: p
  end
end
