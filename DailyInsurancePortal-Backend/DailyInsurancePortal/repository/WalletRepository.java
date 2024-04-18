package com.kax.DailyInsurancePortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kax.DailyInsurancePortal.model.Wallet;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {

	Wallet findByUsername(String username);

}
