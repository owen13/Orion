using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class VueController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult DataBinding()
        {
            return View();
        }

        public IActionResult Events()
        {
            return View();
        }

        public IActionResult MonsterSlayer()
        {
            return View();
        }
    }
}