package com.kax.DailyInsurancePortal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.kax.DailyInsurancePortal.exception.NoMatchException;
import com.kax.DailyInsurancePortal.model.Claim;
import com.kax.DailyInsurancePortal.repository.ClaimRepository;

@Service
public class ClaimService {

	@Autowired
	private ClaimRepository claimRepository;
	@Autowired
	private WalletService walletService;

	public Claim saveClaim(Claim claim) {
		walletService.updateWal(claim.getPolicyName(), claim.getAmt(),claim.getUsername());
		return claimRepository.save(claim);
		
	}
}
