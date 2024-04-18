package com.kax.DailyInsurancePortal.service;

//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import java.util.HashMap;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kax.DailyInsurancePortal.config.APIResponse;
import com.kax.DailyInsurancePortal.config.JwtRequest;
import com.kax.DailyInsurancePortal.config.JwtUtil;

import com.kax.DailyInsurancePortal.exception.BadRequestException;
import com.kax.DailyInsurancePortal.exception.Exception_UserAlreadyExists;
import com.kax.DailyInsurancePortal.model.User;
import com.kax.DailyInsurancePortal.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Override
	public User saveUser(User user) throws Exception_UserAlreadyExists,InputMismatchException {
		 User existingUser = userRepository.findByUsername(user.getUsername());
	        if(existingUser==null) {
	            String mail=user.getEmail();
	            String regex = "^[A-Za-z0-9+_.-]+@(.+)$";
	            Pattern pattern = Pattern.compile(regex);
	            Matcher matcher = pattern.matcher(mail);
	            if(matcher.matches()==true) {
	                log.info("user Added");
	                return userRepository.save(user);

	            }
	            else{
	                throw  new InputMismatchException("field not be in format");
	            }
	        }
	        throw new Exception_UserAlreadyExists("User already exists");
		
	  //return userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		List<User> users = userRepository.findAll();
		log.info("Getting all the user data");
		return users;
	}

	public APIResponse login(JwtRequest jwtRequest) {

        APIResponse apiResponse = new APIResponse();

        // validation

        // verify user exist with given email and password
        User user = userRepository.findOneByUsernameAndPassword(jwtRequest.getUsername(), jwtRequest.getPassword());

        log.info("find user by username and password");
        // response
        if(user == null){
            //apiResponse.setData("User login failed");
            //return apiResponse;
        	
        	throw new BadRequestException();
        }

        // generate jwt
        String token = jwtUtil.generateJwt(user);

        Map<String , Object> data = new HashMap<>();
        data.put("accessToken", token);

        apiResponse.setData(data);

        return apiResponse;
    }
}
