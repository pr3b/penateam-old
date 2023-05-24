import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res){
  const { email, session_id } = req.body;
  const msg = {
    to: email,
    from: "hello@penateam.com", // Replace with your sender email
    subject: "Payment Confirmation",
    text: `Your payment was successful. Session ID: ${session_id}`,
    // html: `<p>Your payment was successful. Session ID: ${session_id}</p>`,
    html: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Payment Success</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333333; font-size: 24px; margin-bottom: 10px; text-align: center;">Payment Successful!</h1>
          <p style="color: #666666; font-size: 16px; margin-bottom: 10px; text-align: center;">Your payment was successful.</p>
          <p style="color: #666666; font-size: 16px; margin-bottom: 10px; text-align: center;">Session ID: ${session_id}</p>
        </div>
      </body>
    </html>    
    `
  };
  try {
    await sgMail.send(msg);
    console.log("Email successfully sent")
    res.status(200).json({ message: "Email successfully sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
