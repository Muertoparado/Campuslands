import './access.js'

export const findUserByEmail = (email) => {
    return db.query('SELECT * FROM users WHERE email=?', [email]); 
  }
  
  export const createUser = (name, email, hashedPass, roleId) => {  
    const sql = "INSERT INTO users(name, email, password, role_id) VALUES(?,?,?,?)";
    
    return db.query(sql, [name,email,hashedPass, roleId]);   
  }

  
  export const register = async (req, res) => {
    const { name, email, password, role } = req.body;
  
    const salt = generateSalt();  
    const hashedPass = await hashPassword(password, salt);
      
    await createUser(name, email, hashedPass, role);
    
    res.send('Usuario registrado');
  }
  
  export const login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await findUserByEmail(email);
    
    if(!user) {
      res.status(400).send('Email no encontrado');
      return;
    }
   
    const valid = await bcrypt.compare(password, user.password); 
    
    if(!valid){
      res.status(400).send('Contraseña inválida');  
      return;
    }
  
    // Login exitoso: Generar JWT
    const token = generateJWT(user); 
    
    res.send(token);
  }
  