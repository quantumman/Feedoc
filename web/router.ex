defmodule Feedoc.Router do
  use Feedoc.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Feedoc do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api", Feedoc do
    pipe_through :api

    resources "/teams", TeamController, except: [:new, :edit] do
      resources "/groups", GroupController, except: [:new, :edit]
    end
  end
end
