using Microsoft.EntityFrameworkCore;

namespace cah264_mission14.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<MovieCollection> Movies { get; set; }
    }
}
