package com.kax.DailyInsurancePortal.controller;

import java.util.InputMismatchException;
//import java.util.InputMismatchException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.fasterxml.jackson.core.JsonProcessingException;
import com.kax.DailyInsurancePortal.config.APIResponse;
import com.kax.DailyInsurancePortal.config.JwtRequest;
import com.kax.DailyInsurancePortal.exception.Exception_UserAlreadyExists;
//import com.kax.DailyInsurancePortal.exception.NoMatchException;
import com.kax.DailyInsurancePortal.model.Claim;
//import com.kax.DailyInsurancePortal.exception.Exception_UserAlreadyExists;
import com.kax.DailyInsurancePortal.model.Policy;
import com.kax.DailyInsurancePortal.model.Purchase;
//import com.kax.DailyInsurancePortal.config.JwtUtil;
import com.kax.DailyInsurancePortal.model.User;
import com.kax.DailyInsurancePortal.model.Wallet;
import com.kax.DailyInsurancePortal.service.ClaimService;
import com.kax.DailyInsurancePortal.service.PolicyService;
import com.kax.DailyInsurancePortal.service.PurchaseService;
import com.kax.DailyInsurancePortal.service.UserService;
import com.kax.DailyInsurancePortal.service.WalletService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {


	@Autowired
	private UserService userService;
	
	@Autowired
	private WalletService walletService;
	
	@Autowired
	private PolicyService policyService;
	
	@Autowired
	private PurchaseService purchaseService;

	@Autowired
	private ClaimService claimService;
	
	/*@Autowired
    private JwtUtil jwtUtil;
    */
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@PostMapping("/register")
	public String register(@RequestBody User user) throws InputMismatchException, Exception_UserAlreadyExists {
		userService.saveUser(user);
		log.info("saving the userData in db");
		// return new ResponseEntity<User>(user, HttpStatus.CREATED);
		return "new user added";
	}

	@GetMapping("/getAll")
	public List<User> getAllUsers() {
		log.info("Getting all the user data");
		return userService.getAllUsers();
	}

	@PostMapping("/login")
    public ResponseEntity<APIResponse> login(@RequestBody JwtRequest jwtRequest ){

        APIResponse apiResponse = userService.login(jwtRequest);
        log.info("login by username and password");

        return ResponseEntity
                .status(apiResponse.getStatus())
                .body(apiResponse);
    }
	
    
	
	@PostMapping("/AddWallet")
	public String addWallet(@RequestBody Wallet wallet) throws Exception {
		
			walletService.saveWallet(wallet);
			log.info("saving the walletData in db");
			return "new wallet added";
		
	
	}
	
	@PostMapping("/purchasePolicy")
	public String purchasePolicy(@RequestBody Policy policy) {
		policyService.savePolicy(policy);
		log.info("saving the policyData in db");
		// return new ResponseEntity<User>(user, HttpStatus.CREATED);
		return "new policy added";
	}
	
	@GetMapping("/getAllPolicy")
	public List<Policy> getAllPolicy() {
		log.info("Getting all the policy data");
		return policyService.getAllPolicy();
		
	}
	
	@PostMapping("/purchase")
	public String purchase(@RequestBody Purchase purchase) throws Exception {
		purchaseService.savePurchase(purchase);
		log.info("saving the purchaseData in db");
		// return new ResponseEntity<User>(user, HttpStatus.CREATED);
		return "new purchase added";
	}
	
	@PutMapping("/claim")
	public String claim(@RequestBody Claim claim) {
		claimService.saveClaim(claim);
		return "claim saved";
		
	}

	/*@PostMapping("/purchasePolicy1")
	public String purchasePolicy(@RequestBody Policy policy) {
		policyService.savePolicy(policy);
		// return new ResponseEntity<User>(user, HttpStatus.CREATED);
		return "new user added";*/
	
	/*@GetMapping("/privateApi")
    public ResponseEntity<APIResponse> privateApi(@RequestHeader(value = "authorization", defaultValue = "") String auth) throws Exception {
        APIResponse apiResponse =new APIResponse();

        jwtUtil.verify(auth);

        apiResponse.setData("this is private api");
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    */
}







/*
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	
	
	
}
*/
