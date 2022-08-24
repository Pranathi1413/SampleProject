using JwtWebApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace JwtWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet, Authorize]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return Ok(UsersDataStore.Current.Users);
        }

        [HttpGet("profile"), Authorize]
        public ActionResult<User> GetProfile()
        {
            var userName = User?.Identity?.Name;
            var user = UsersDataStore.Current.Users.FirstOrDefault(u => u.Username == userName);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);

        }

    }
}
