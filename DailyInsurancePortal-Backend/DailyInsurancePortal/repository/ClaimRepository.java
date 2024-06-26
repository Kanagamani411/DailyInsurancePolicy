package com.kax.DailyInsurancePortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kax.DailyInsurancePortal.model.Claim;

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long> {

}
