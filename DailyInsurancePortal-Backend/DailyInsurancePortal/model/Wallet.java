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
@Table(name = "wallet3")
public class Wallet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	/*@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="fk_user_name")
	private User user;*/
	
	
	@Column(name = "mode")
	private String mode;
	@Column(name = "amount")
	private int amount;
	
	/*@Column(name = "balance")
	private int balance;
	*/


	@Column(name = "uname", unique=true)
	private String username;

	
	
	
	/*@OneToOne
	@JoinColumn(name = "id", referencedColumnName = "user_name", nullable = false)
	private User user;
	*/
}
