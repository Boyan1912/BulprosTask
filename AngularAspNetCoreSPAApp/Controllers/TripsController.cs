using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularAspNetCoreSPAApp;
using Microsoft.AspNetCore.Cors;

namespace AngularAspNetCoreSPAApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [DisableCors]
    public class TripsController : ControllerBase
    {
        private readonly AppDbContext _context;

        //public TripsController() : base()
        //{

        //}

        public TripsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Trips
        [HttpGet]
        public IEnumerable<JomoTrip> Gettbltrip()
        {
            return _context.Trip;
        }

        // GET: api/Trips/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTrip([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trip = await _context.Trip.FindAsync(id);

            if (trip == null)
            {
                return NotFound();
            }

            return Ok(trip);
        }

        // PUT: api/Trips/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrip([FromRoute] int id, [FromBody] JomoTrip trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trip.Id)
            {
                return BadRequest();
            }

            _context.Entry(trip).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TripExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Trips
        [HttpPost]
        public async Task<IActionResult> PostTrip([FromBody] JomoTrip trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            trip.UserId = "AngularAspNetCoreSPAAppUser";
            _context.Trip.Add(trip);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrip", new { id = trip.Id }, trip);
        }

        // DELETE: api/Trips/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrip([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trip = await _context.Trip.FindAsync(id);
            if (trip == null)
            {
                return NotFound();
            }

            _context.Trip.Remove(trip);
            await _context.SaveChangesAsync();

            return Ok(trip);
        }

        private bool TripExists(int id)
        {
            return _context.Trip.Any(e => e.Id == id);
        }
    }
}