package com.kax.DailyInsurancePortal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name = "claim1")
public class Claim {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long purchase_id;
	@Column(name="policy_name")
	private String policyName;
	@Column(name="claim_amt")
	private int amt;
	@Column(name="uname")
	private String username;
}
