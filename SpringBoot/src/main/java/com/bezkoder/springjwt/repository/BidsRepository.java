package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Bid;

@Repository
public interface BidsRepository extends JpaRepository<Bid, Long> {

	@Query(value= "select count(id) from Bid" )
	public int getBidCount();
}
