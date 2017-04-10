using System;
using System.Collections.Generic;
using System.Linq;
using NeuTravel.Data;
using NeuTravel.Data.Interfaces;
using NeuTravel.Data.Models;

namespace NeuTravel.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        Entities Context = new Entities();

        /// <summary>
        /// Get's User Details
        /// </summary>
        /// <returns>Dictionary with Key as the User Role and Value as the full Name of the User</returns>
        public AppUser GetUserDetails()
        {
            string loggedInUser = System.Security.Principal.WindowsIdentity.GetCurrent().Name.Replace("CORP\\", "");

            return Context.Users.Where(x => x.UserName == loggedInUser)
                .Select(c => new AppUser() {
                FirstName = c.FirstName,
                LastName = c.LastName,
                UserId = c.UserId,
                Role = c.UserRole.Role}).FirstOrDefault();
       
        }
    }
}