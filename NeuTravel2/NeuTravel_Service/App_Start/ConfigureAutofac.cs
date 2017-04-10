using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Autofac;
using System.Web.Http.Dependencies;
using System.Web.Http;
using System.Reflection;
using NeuTravel.Data.Interfaces;
using NeuTravel.Data.Repositories;
using Autofac.Integration.WebApi;

namespace NeuTravel_Service.App_Start
{
    public class ConfigureAutofac
    {

        public static void RegisterComponents()
        {
            
            var apiBuilder = new ContainerBuilder();

            // Get your HttpConfiguration.
            var config = GlobalConfiguration.Configuration;

            // Register your Web API controllers.
            apiBuilder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            apiBuilder.RegisterType<TravelRepository>().As<ITravelRepository>().SingleInstance();
            apiBuilder.RegisterType<UserRepository>().As<IUserRepository>().SingleInstance();
            // OPTIONAL: Register the Autofac filter provider.
            apiBuilder.RegisterWebApiFilterProvider(config);

            // Set the dependency resolver to be Autofac.
            var apiContainer = apiBuilder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(apiContainer);
            
        }
    }
}