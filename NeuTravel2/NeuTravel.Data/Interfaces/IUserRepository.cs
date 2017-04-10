using NeuTravel.Data.Models;
using System;
using System.Collections.Generic;

namespace NeuTravel.Data.Interfaces
{
    public interface IUserRepository
    {
        AppUser GetUserDetails();//make it loggedinuser deatils
    }
}