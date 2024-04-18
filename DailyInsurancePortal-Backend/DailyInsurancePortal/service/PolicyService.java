package com.kax.DailyInsurancePortal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kax.DailyInsurancePortal.model.Policy;
import com.kax.DailyInsurancePortal.repository.PolicyRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class PolicyService {
	
	@Autowired
	private PolicyRepository policyRepository;
	
	private static final Logger log = LoggerFactory.getLogger(PolicyService.class);

	public Policy savePolicy(Policy policy) {
		log.info("policy Added");
		return policyRepository.save(policy);
	}

	public List<Policy> getAllPolicy() {
		List<Policy> policys = policyRepository.findAll();
		log.info("getting all the policy");
		return policys;
	}

}
