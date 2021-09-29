package com.bezkoder.springjwt.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bezkoder.springjwt.models.Result;
@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {

	@Query(value= "select count(id) from Result" )
	public int getResultCount();
}
