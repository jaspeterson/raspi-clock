package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Root:   "clock-dist",
		Browse: true,
	  }))

	e.Logger.Fatal(e.Start(":8888"))
}