using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Configuration;
using System.Web.Http.Cors;

namespace NeuTravel_Service
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
              var cors = new EnableCorsAttribute("http://localhost:63444/api/CreateRequest", "*", "*");


            config.EnableCors();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
               name: "CreateRequest",
               routeTemplate: "api/{controller}/{InitiatorName}",
               defaults: new { InitiatorName = RouteParameter.Optional }
           );

            //string conn = ConfigurationManager.ConnectionStrings["NeuTravelEntities"].ConnectionString;
        }
    }
}
