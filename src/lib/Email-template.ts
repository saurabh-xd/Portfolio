export function EmailTemplate({
  username,
  email,
  contact,
  subject,
  message,
}: {
  username: string;
  email: string;
  contact: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 12px;">

      <h2 style="color:#4F46E5;">📩 New Contact Message</h2>

      <p><strong>Name:</strong> ${username}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${contact}</p>
      <p><strong>Interested in:</strong> ${subject}</p>

      <hr style="margin: 20px 0; opacity:0.3;" />

      <h3>Message:</h3>
      <p style="white-space: pre-line; font-size: 15px;">
        ${message}
      </p>

      <br/>

      <p style="font-size: 13px; opacity:0.7;">
        Sent on: ${new Date().toLocaleString()}
      </p>

    </div>
  `;
}
