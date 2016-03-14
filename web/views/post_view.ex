defmodule Feedoc.PostView do
  use Feedoc.Web, :view

  def render("index.json", %{posts: posts}) do
    render_many(posts, Feedoc.PostView, "post.json")
  end

  def render("show.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      content: post.content,
      group_id: post.group_id,
      creator: %{
        avatar: "http://www.gravatar.com/avatar/00000000000000000000000000000000",
        name: "dummy"
      }}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      group_id: post.group_id,
      creator: %{
        avatar: "http://www.gravatar.com/avatar/00000000000000000000000000000000",
        name: "dummy"
      }}
  end
end
