package com.kax.DailyInsurancePortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kax.DailyInsurancePortal.model.Policy;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long>{

}
