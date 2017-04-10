//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using System.Net.Mail;
//using NeuTravel.Data.Models;


//namespace NeuTravel_Service.Controllers
//{
//    public class EmailController : ApiController
//    {
//        public void SendEmail(Email _Mailobj)
//        {
//            if (ModelState.IsValid)
//            {
//                MailMessage mail = new MailMessage();
//                mail.To.Add(_Mailobj.To);
//                mail.From = new MailAddress(_Mailobj.From);
//                mail.Subject = _Mailobj.Subject;
//                string body = _Mailobj.Body;
//                mail.Body = body;
//                mail.IsBodyHtml = true;
//                SmtpClient smtp = new SmtpClient();
//                SmtpClient smtpClient = new SmtpClient("mail.neudesic.com");
//                smtp.UseDefaultCredentials = false;
//                smtp.Credentials = new NetworkCredential("username", "password");
//                smtp.EnableSsl = true;
//                smtp.Send(mail);
//                return View("Index", _Mailobj);

//            }
//            else
//                return View();
//        }

//    }
//}
