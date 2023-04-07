using cah264_mission14.Data;
using Microsoft.AspNetCore.Mvc;

namespace cah264_mission14.Controllers
{   
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<MovieCollection> Get()
        {
            var x = context.Movies.ToArray();

            return context.Movies.ToArray();
        }
    }
}
