using NeuTravel.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NeuTravel.Data;
using System.Web.Http;

namespace NeuTravel_Service.Controllers
{
    public class UserController : ApiController
    {
        private IUserRepository _userRepository;

        /// <summary>
        /// Constructor Injection
        /// </summary>
        /// <param name="userRepository"></param>
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        /// <summary>
        /// Parameterless Constructor
        /// </summary>
        public UserController()
        {

        }

        /// <summary>
        /// Get User Details
        /// </summary>
        /// <returns>Dictionary of UserDetails</returns>
        [Route("api/GetUserRole")]
        public IHttpActionResult GetUserDetail()
        {
            return Ok(_userRepository.GetUserDetails());
        }


    }
}