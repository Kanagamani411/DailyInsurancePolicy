package com.kax.DailyInsurancePortal.service;

import java.util.InputMismatchException;
import java.util.List;

import com.kax.DailyInsurancePortal.config.APIResponse;
import com.kax.DailyInsurancePortal.config.JwtRequest;
import com.kax.DailyInsurancePortal.exception.Exception_UserAlreadyExists;
import com.kax.DailyInsurancePortal.model.User;

public interface UserService {

	public User saveUser(User user) throws Exception_UserAlreadyExists, InputMismatchException;
	public List<User> getAllUsers();
	public APIResponse login(JwtRequest jwtRequest);
}
