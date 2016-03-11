defmodule Feedoc.Group do
  use Feedoc.Web, :model

  schema "groups" do
    field :name, :string
    belongs_to :team, Feedoc.Team

    timestamps
  end

  @required_fields ~w(name team_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> foreign_key_constraint(:team_id)
  end

  def of_team(id) do
    from g in Feedoc.Group,
    where: g.team_id == ^id,
    select: g
  end
end
