package com.kax.DailyInsurancePortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kax.DailyInsurancePortal.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findOneByUsernameAndPassword(String username, String password);
	User findByUsername(String username);

}
