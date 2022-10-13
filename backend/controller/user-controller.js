import bcrypt from 'bcryptjs';
import { default as User, default as user } from '../model/User';
export async function getAllUser(req, res, next) {
    let users;
    try {
        users = await user.find();
    } catch (error) {
       return console.log(error);
    }
    if (!users) {
        return res.status(404).json({ message: "no usrs found" });
    }

    return res.status(200).json({ users });

};

export async function signUp(req, res, next) {
const {name,email,password} = req.body;

let existingUser;
try {
    existingUser = await User.findOne({ email });
} catch (error) {
   return console.log(error);
}
if (existingUser) {
    return res.status(400).json({ message: "User Already exist" });
}

const hashedPassword = bcrypt.hashSync(password);

const user = new User({
    name,email,password:hashedPassword
})

try {
    await user.save();
 } catch (error) {
    return console.log(error);
 }
 return res.status(201).json({ user });
};

export async function logIn(req, res) {
    const {email,password} = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
       return console.log(error);
    }
    if (! existingUser) {
        return res.status(404).json({ message: "Couldn,t find user" });
    }
    
    const passwordCheck = bcrypt.compareSync(password,existingUser.password);
    

    
if(!passwordCheck){
    return res.status(404).json({ message: "password is,not correct" });
}

    // try {
    //     await user.save();
    //  } catch (error) {
    //     return console.log(error);
    //  }
     return res.status(200).json({ message: "Logged in successfully" });
    };
    