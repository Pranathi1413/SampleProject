using JwtWebApi.Models;

namespace JwtWebApi
{
    public class UsersDataStore
    {
        public List<User> Users { get; set; }

        public static UsersDataStore Current { get;  } = new UsersDataStore();

        public UsersDataStore()
        {
            Users = new List<User>();
        }
    }
}
