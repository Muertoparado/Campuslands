import crypto from 'crypto';
import bcrypt from 'bcrypt';

export function generateSalt() {
  try {
    const saltRounds = parseInt(process.env.BCRYPT_SALT);
    const salt = bcrypt.genSaltSync(saltRounds).toString(); // Convierte la sal en cadena
    return salt;
  } catch (error) {
    console.error(error);
    throw new Error('Error al generar la sal');
  }
}

export async function hashPassword(password, salt) {
  try {
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.error(error);
    throw new Error('Error al hashear la contraseña');
  }
}