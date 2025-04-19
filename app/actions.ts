"use server"

export async function sendEmail(formData: FormData) {
  // Simulação de envio de email
  // Em um ambiente real, você usaria um serviço como SendGrid, Mailchimp, etc.

  const name = formData.get("name")
  const email = formData.get("email")
  const company = formData.get("company")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Validação básica
  if (!name || !email || !company || !subject || !message) {
    throw new Error("Todos os campos são obrigatórios")
  }

  // Simulação de atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Aqui você implementaria a lógica real de envio de email
  console.log("Email enviado:", { name, email, company, subject, message })

  // Retorna sucesso
  return { success: true }
}
