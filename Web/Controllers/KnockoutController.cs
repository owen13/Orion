using Data;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Web.Controllers
{
    public class KnockoutController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public KnockoutController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        
        public IActionResult Index()
        {
            HomeViewModel viewModel = new HomeViewModel()
            {
                Computers = _unitOfWork.Computers.GetAll(),
                Rams = _unitOfWork.Rams.GetAll(),
                HardDrives = _unitOfWork.HardDrives.GetAll(),
                GraphicsCards = _unitOfWork.GraphicsCards.GetAll(),
                Procesors = _unitOfWork.Processors.GetAll()
            };
            
            return View(viewModel);
        }
    }
}