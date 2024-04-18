package com.kax.DailyInsurancePortal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "policy1")
public class Policy {

	@Id
	private long policy_id;
	@Column(name="policyName")
	private String policy_name;
	@Column(name="policyPremium")
	private int policy_premium;
	@Column(name="policyCoverage")
	private int policy_coverage;
	
	
}
