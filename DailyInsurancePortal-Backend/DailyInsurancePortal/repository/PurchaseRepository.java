package com.kax.DailyInsurancePortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kax.DailyInsurancePortal.model.Purchase;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

	Purchase findByUsername(String username);
}
